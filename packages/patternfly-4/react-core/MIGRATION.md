# Migrating from PatternFly 3 to PatternFly4

Migrating from **PatternFly 3** to **PatternFly 4** involves ditching bootstrap altogether in favor of native patternfly react components & layout utility classes. This means that functionality previously baked in to patterfly 3 via bootstrap is no longer abstracted away and handled by bootstrap behind the scenes. This allows greater customization of event handling & overall user interactivity by the end user.

# General Guidelines

## Event Handling

Where users previously relied on bootstrap to handle events, users must now implement event handling themselves using react. The user will need to add their own lifecycle methods as needed for this. In some cases, the functionality has been extracted to an additional component.

### Examples

- The dropdown component will now need to be opened by the consumer.
- In the alert modal, there is no longer a built in onDismiss handler.

See [React Docs](https://reactjs.org/docs/handling-events.html)

---
