function contentClasses () {
    
// Add class filter

// Headline class

for (let i = 1; i < 10; i++) {
    let currentNum = i;
    let headings = document.querySelectorAll(".main h" + currentNum);

    headings.forEach((heading) => {
        heading.classList.add("headline");
        heading.classList.add("headline--" + currentNum);
    });
}

// Paragraph class 

let paragraphs = document.querySelectorAll(".main p");

paragraphs.forEach((paragraph) => {
    paragraph.classList.add("paragraph");
});

// list class

let unorderedListContainers = document.querySelectorAll(".main ul");

unorderedListContainers.forEach((unorderedListContainer) => {
    unorderedListContainer.classList.add("list");
    unorderedListContainer.classList.add("list--unordered");
});

let orderedListContainers = document.querySelectorAll(".main ol");

orderedListContainers.forEach((orderedListContainer) => {
    orderedListContainer.classList.add("list");
    orderedListContainer.classList.add("list--ordered");
});

let listElements = document.querySelectorAll(".main li");

listElements.forEach((listElement) => {
    listElement.classList.add("list__element");
});

    console.log("content classes imported");
}



export {contentClasses};