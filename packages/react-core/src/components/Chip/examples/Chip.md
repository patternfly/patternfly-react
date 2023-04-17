---
id: Chip
section: components
cssPrefix: pf-c-chip
propComponents: ['Chip', 'ChipGroup']
ouia: true
---

## Chip examples

### Variants
Chips can be removable or read-only. The Overflow chip is a special chip that is used to expand or collapse the content of a chip group.

```ts file='./ChipDefault.tsx'
```

## Chip group examples
A chip group is a collection of chips that can be grouped by category and used to represent one or more values assigned to a single attribute. When the value of 'numChips' is exceeded, additional chips will be hidden using an overflow chip.

### Simple inline

```ts file='./ChipGroupInline.tsx'
```

### With categories

```ts file='./ChipGroupWithCategories.tsx'
```

### With removable categories

```ts file='./ChipGroupRemovableCategories.tsx'
```
