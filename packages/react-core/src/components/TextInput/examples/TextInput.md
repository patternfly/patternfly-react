---
id: Text input
section: components
cssPrefix: pf-c-form-control
propComponents: ['TextInput']
---

## Examples

### Basic

```ts file="./TextInputBasic.tsx"
```

### Disabled

```ts file="./TextInputDisabled.tsx"
```

### Truncated on Left

```ts file="./TextInputLeftTruncated.tsx"
```

### Read only

```ts file="./TextInputReadOnly.tsx"
```

### Invalid

```ts file="./TextInputInvalid.tsx"
```

### Select text using ref

```ts file="./TextInputSelectUsingRef.tsx"
```

### Icon variants

```ts file="./TextInputIcon.tsx"
```

### Icon sprite variants

**Note:** The icons for the success, invalid, calendar, etc. variations in form control elements are applied as background images to the form element. By default, the image URLs for these icons are data URIs. However, there may be cases where data URIs are not ideal, such as in an application with a content security policy that disallows data URIs for security reasons. The `isIconSprite` variation changes the icon source to an external SVG file that serves as a sprite for all of the supported icons.

```ts file="./TextInputIconSprite.tsx"
```
