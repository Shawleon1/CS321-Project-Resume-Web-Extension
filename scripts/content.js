document.title = "My awesome title!" 

const article = document.querySelector("style__text___2ilXR style__large___3qwwG style__tight___RF4uH");
if (article) {
    const text = article.textContent;
    const wordMatchRegExp = /[^\s]+/g; // Regular expression
    const words = text.matchAll(wordMatchRegExp);
    const wordCount = [...words].length;
}