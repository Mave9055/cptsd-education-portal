#!/usr/bin/env python3
"""
Parse lectures from markdown and generate structured JSON data for the frontend.
This version handles the combined lectures_full.md file.
"""

import json
import re

# Read the lectures content
with open('lectures_full.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Split by ## Lecture N: headers (these are the main lecture sections)
lecture_blocks = re.split(r'^## Lecture \d+:', content, flags=re.MULTILINE)[1:]

lectures = []
for idx, block in enumerate(lecture_blocks, 1):
    # Extract title from first line
    first_line = block.split('\n')[0].strip()
    title = first_line
    
    # Extract subtitle (if it exists)
    subtitle_match = re.search(r'^\*\*Subtitle:\*\* (.+?)$', block, re.MULTILINE)
    subtitle = subtitle_match.group(1).strip() if subtitle_match else ""
    
    # Extract learning objectives
    objectives = []
    objectives_match = re.search(r'### Learning Objectives\n(.*?)(?=\n### |\Z)', block, re.DOTALL)
    if objectives_match:
        objectives_text = objectives_match.group(1)
        # Look for numbered items with bold action words
        objectives_raw = re.findall(r'^\d+\.\s+\*\*(.+?)\*\*\s+(.+?)$', objectives_text, re.MULTILINE)
        if objectives_raw:
            objectives = [{"action": obj[0], "description": obj[1]} for obj in objectives_raw]
        else:
            # If no bold format, just extract numbered items
            objectives_raw = re.findall(r'^\d+\.\s+(.+?)$', objectives_text, re.MULTILINE)
            objectives = [{"action": "Learn", "description": obj} for obj in objectives_raw]
    
    # Extract discussion questions
    questions = []
    questions_match = re.search(r'### Discussion Questions\n(.*?)(?=\n### |\Z)', block, re.DOTALL)
    if questions_match:
        questions_text = questions_match.group(1)
        questions = re.findall(r'^\d+\.\s+(.+?)$', questions_text, re.MULTILINE)
    
    # Extract facilitator note
    facilitator_note = ""
    facilitator_match = re.search(r'### Facilitator Note\n(.*?)(?=\n### |\Z)', block, re.DOTALL)
    if facilitator_match:
        facilitator_note = facilitator_match.group(1).strip()
    
    # Extract main content (everything except objectives, discussion questions, and facilitator notes)
    # Remove the learning objectives section
    main_content = re.sub(r'### Learning Objectives\n.*?(?=\n### |\Z)', '', block, flags=re.DOTALL)
    # Remove discussion questions
    main_content = re.sub(r'### Discussion Questions\n.*?(?=\n### |\Z)', '', main_content, flags=re.DOTALL)
    # Remove facilitator note
    main_content = re.sub(r'### Facilitator Note\n.*?(?=\n### |\Z)', '', main_content, flags=re.DOTALL)
    main_content = main_content.strip()
    
    lectures.append({
        "id": idx,
        "title": title,
        "subtitle": subtitle,
        "learning_objectives": objectives,
        "content": main_content,
        "discussion_questions": questions,
        "facilitator_note": facilitator_note
    })

# Generate JSON
output = {
    "total_lectures": len(lectures),
    "lectures": lectures
}

with open('client/src/data/lectures.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, indent=2, ensure_ascii=False)

print(f"Successfully parsed {len(lectures)} lectures")
print(f"Lecture IDs: {[l['id'] for l in lectures]}")
for lecture in lectures:
    print(f"  Lecture {lecture['id']}: {lecture['title'][:50]}...")
