---
id: Chip
section: components
cssPrefix: ['pf-v6-c-chip', 'pf-v6-c-chip-group']
propComponents: ['Chip', 'ChipGroup']
ouia: true
deprecated: true
---

## Examples

### Chip variants

Chips can be removable or read-only. The Overflow chip is a special chip that is used to expand or collapse the content of a chip group.

```ts file='./ChipDefault.tsx'

```

### Chip groups

A chip group is a collection of chips that can be grouped by category and used to represent one or more values assigned to a single attribute. When the value of `numChips` is exceeded, additional chips will be hidden using an overflow chip.

```ts file='./ChipGroupInline.tsx'

```

### Chip groups with categories

```ts file='./ChipGroupWithCategories.tsx'

```

### Chip groups with removable categories

```ts file='./ChipGroupRemovableCategories.tsx'

```
