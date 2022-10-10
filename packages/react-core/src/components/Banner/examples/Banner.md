---
id: Banner
section: components
cssPrefix: pf-c-banner
propComponents: ['Banner']
---

## Examples

### Basic

Banners can be styled with one of 5 different colors. A basic banner should only be used when the banner color does not represent status or severity.

```ts file="./BannerBasic.tsx"
```

### Status

When a banner is used to convey status, it is advised to pass in either the `hasStatusIcon` or `customIcon` property to render an icon inside the banner. This icon should convey the banner variant beyond just the banner color.

```ts file="./BannerStatus.tsx"
```
