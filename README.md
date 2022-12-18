# UI Libs learning plan

Usually in larger projects people are separating UI components to a folder/package called `ui`. These components become a part of design system and can be developed, tested and even released separately while being consumed by multiple features/projects.

## Writing UI lib is hard!

Example is a [slider](https://github.com/radix-ui/primitives/blob/main/packages/react/slider/src/Slider.tsx) code from Radix UI. This is without styles. And please note all those dependencies

<img width="220" alt="image" src="https://user-images.githubusercontent.com/7273003/208291475-eca5136b-d987-4e17-8675-2183be9fe295.png">

Why is it hard?

There are several things that lib creator should think about:
- DX (dev. experience) - nice API of components
- Accessibility compliance (example of the [doc for slider](https://w3c.github.io/aria/#slider))
- Keyboard navigation (also part of accessibility)
- Z-indexes (example: modal on top of opened dropdown)
- Design system overall (consistent fonts, colors etc.)
- How to release this library for multiple consumers (several sub-projects)
- Handling layout change on resize and on scroll

## Choosing UI library is hard!

[Example of a service](https://component.gallery/components/select/) that allows to choose select library for you 

<img width="1357" alt="image" src="https://user-images.githubusercontent.com/7273003/208292147-f77ec5b7-e119-4905-a309-bf0790dddcfe.png">

(and this list does not include several really nice options!)

## How to approach ui library choice?

### 1. Watch awesome intro about UI Libraries from Theo 

[Video link](https://www.youtube.com/watch?v=CQuTF-bkOgc&t=157s&ab_channel=Theo-t3%E2%80%A4gg)

<img width="886" alt="image" src="https://user-images.githubusercontent.com/7273003/208295756-d6f7786c-d358-4234-9747-0bab5b0ac436.png">


### 2. Check this repo and compare 4 options

```bash
npm install
npm run storybook # to see 4 cases in storybook
npm run build ## to see build size of selected choice (please edit `App.tsx` including only one option at a time)
```


## Description of options to compare

_notes:_
_- contestants are subjective, but based on popularity_
_- Examples are not adjusted to one style to see default options libraries can suggest_
_- Comparison is based on `Slider` component and definitely not exhaustive_

### 1. Radix-UI

<img width="219" alt="image" src="https://user-images.githubusercontent.com/7273003/208296338-f8ced336-92f8-431a-9807-43e807a3ba95.png">

Build size 

<img width="477" alt="image" src="https://user-images.githubusercontent.com/7273003/208296081-6bb3c7ca-07b2-461b-94b2-bf678b887c18.png">


### 2. MUI

<img width="291" alt="image" src="https://user-images.githubusercontent.com/7273003/208296345-52ca5350-ac89-45d5-99d0-2d07ae798bf3.png">

Build size

<img width="480" alt="image" src="https://user-images.githubusercontent.com/7273003/208296141-5c08e16f-280c-45c3-830a-3022a8a61337.png">

### 3. Tailwind Elements

<img width="153" alt="image" src="https://user-images.githubusercontent.com/7273003/208296356-d62f3767-a7c4-44f6-ab30-94df539d628e.png">

Build size

<img width="488" alt="image" src="https://user-images.githubusercontent.com/7273003/208296168-da745732-0bbb-41ae-a95d-f32efba59528.png">

### 4. Custom lib for Slider only (`react-slider`)

<img width="291" alt="image" src="https://user-images.githubusercontent.com/7273003/208296372-66485c63-e30f-466e-8ba4-7c5de05a55e6.png">

Build size

<img width="481" alt="image" src="https://user-images.githubusercontent.com/7273003/208296205-72243821-7db2-4ad6-8ce4-0eb986d52c09.png">

## Results

|                                 | Radix                                                                                               | Mui                                                                                                                                | tw-elements                                                                                                                               | react-slider                |
|---------------------------------|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------|
| Includes own styling approach   | -                                                                                                   | +                                                                                                                                  | +                                                                                                                                         | -                           |
| Allows to pass extra props (id) | +                                                                                                   | +                                                                                                                                  | +                                                                                                                                         | -                           |
| Subjective opinion              | The best for internal design libraries in large companies with fancy design and accessibility focus | Popular and has many components inside.  Works well for projects where some components need to be used fast, without fancy designs | If you are a Tailwind fan - probably  better to buy TailwindUI for commercial project.  The only solution that required some build setup. | Never use custom libraries. |
