# HTML semantics tags and structure:

## List of semantic tags

- Article
- Aside
- Details
- Figcaption
- FIgure
- Footer
- Header
- Main
- Mark
- Nav
- Section
- Summary
- Time


### section
---

> A section is a thematic grouping of content, typically with a heading.

```html  
<section>
    <h1>WWF</h1>
    <p>The World Wide Fund for Nature (WWF).</p>
</section>
```


--- 

### Article
The article element is effectively a specialized kind of section and it has a more specific meaning, referring to an independent, self-contained block of related content.

### Details: content dropdown
```html
<details>
  <summary>Click to see details about the details tag</summary>
  <p>The **details** tag is useful for collapsible content like frequently asked questions (FAQs) or expandable descriptions.</p>
  <p>It was introduced in HTML5.</p>
</details>
```

### Figure: Semantic Images
```html
<figure>
  <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>
```

### Mark: Highlights the text
```html
<h1>Hi <mark>harsh</mark></h1>
```


