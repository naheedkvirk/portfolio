export { default } from "./Hero";

/*
In interviews, if someone asks:
"Why did you use an index.ts file?"

A strong answer is:

"I used it as a barrel export to simplify imports and provide a clean public interface for a component folder. 
I don't add them everywhere by default—on smaller components they don't add much value, but they're helpful as 
a feature grows and exposes multiple modules."
*/
