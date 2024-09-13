//['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const unicodeClasses = {
    italic: ['𝑎', '𝑏', '𝑐', '𝑑', '𝑒', '𝑓', '𝑔', 'ℎ', '𝑖', '𝑗', '𝑘', '𝑙', '𝑚', '𝑛', '𝑜', '𝑝', '𝑞', '𝑟', '𝑠', '𝑡', '𝑢', '𝑣', '𝑤', '𝑥', '𝑦', '𝑧'],
    boldscript: ['𝓪', '𝓫', '𝓬', '𝓭', '𝓮', '𝓯', '𝓰', '𝓱', '𝓲', '𝓳', '𝓴', '𝓵', '𝓶', '𝓷', '𝓸', '𝓹', '𝓺', '𝓻', '𝓼', '𝓽', '𝓾', '𝓿', '𝔀', '𝔁', '𝔂', '𝔃'],
    boldfraktur: ['𝖆', '𝖇', '𝖈', '𝖉', '𝖊', '𝖋', '𝖌', '𝖍', '𝖎', '𝖏', '𝖐', '𝖑', '𝖒', '𝖓', '𝖔', '𝖕', '𝖖', '𝖗', '𝖘', '𝖙', '𝖚', '𝖛', '𝖜', '𝖝', '𝖞', '𝖟'],
    black: ['🅐', '🅑', '🅒', '🅓', '🅔', '🅕', '🅖', '🅗', '🅘', '🅙', '🅚', '🅛', '🅜', '🅝', '🅞', '🅟', '🅠', '🅡', '🅢', '🅣', '🅤', '🅥', '🅦', '🅧', '🅨', '🅩'],
    blacks: ['🅰', '🅱', '🅲', '🅳', '🅴', '🅵', '🅶', '🅷', '🅸', '🅹', '🅺', '🅻', '🅼', '🅽', '🅾', '🅿', '🆀', '🆁', '🆂', '🆃', '🆄', '🆅', '🆆', '🆇', '🆈', '🆉'],
    double: ['𝕒', '𝕓', '𝕔', '𝕕', '𝕖', '𝕗', '𝕘', '𝕙', '𝕚', '𝕛', '𝕜', '𝕝', '𝕞', '𝕟', '𝕠', '𝕡', '𝕢', '𝕣', '𝕤', '𝕥', '𝕦', '𝕧', '𝕨', '𝕩', '𝕪', '𝕫'],
    cursive: ['𝒶', '𝒷', '𝒸', '𝒹', 'ℯ', '𝒻', 'ℊ', '𝒽', '𝒾', '𝒿', '𝓀', '𝓁', '𝓂', '𝓃', 'ℴ', '𝓅', '𝓆', '𝓇', '𝓈', '𝓉', '𝓊', '𝓋', '𝓌', '𝓍', '𝓎', '𝓏'],
    weird: ['⋒', 'ᲇ', '⋐', 'ⅆ', 'ⅇ', '⨎', '𓉛', 'ꖲ', 'ⅈ', 'ⅉ', 'Ԟ', 'ǁ', '⩕', 'ℼ', '☉', 'ꘝ', '¶', 'ℾ', '𝕤', '╬', '⋓', '⩔', 'ꖿ', '⨳', 'ℽ', 'ẕ'],
    weird2: ['⋒', '𝕓', '⋐', '𝕕', 'ⅇ', '𝕗', '𓉛', '𝕙', 'ⅈ', '𝕛', 'Ԟ', '𝕝', '⩕', '𝕟', '☉', '𝕡', '¶', '𝕣', '𝕤', '𝕥', '⋓', '𝕧', 'ꖿ', '𝕩', 'ℽ', '𝕫'],
    mo: ['𝚊', '𝚋', '𝚌', '𝚍', '𝚎', '𝚏', '𝚐', '𝚑', '𝚒', '𝚓', '𝚔', '𝚕', '𝚖', '𝚗', '𝚘', '𝚙', '𝚚', '𝚛', '𝚜', '𝚝', '𝚞', '𝚟', '𝚠', '𝚡', '𝚢', '𝚣'],
    hooks: ['ả', 'ɓ', 'ƈ', 'ɗ', 'ẻ', 'ḟ', 'ɠ', 'ɦ', 'ỉ', 'ĵ', 'ƙ', 'ꞎ', 'ḿ', 'ή', 'ơ', 'ƥ', 'ʠ', 'ɼ', 'ś', 'ť', 'ư', 'ⱱ', 'ⱳ', 'x̂', 'ƴ', 'ź'],
    upper: ['ᵃ', 'ᵇ', 'ᶜ', 'ᵈ', 'ᵉ', 'ᶠ', 'ᵍ', 'ʰ', 'ᶦ', 'ʲ', 'ᵏ', 'ˡ', 'ᵐ', 'ⁿ', 'ᵒ', 'ᵖ', 'ᑫ', 'ʳ', 'ˢ', 'ᵗ', 'ᵘ', 'ᵛ', 'ʷ', 'ˣ', 'ʸ', 'ᶻ'],
    bubble: ['ⓐ', 'ⓑ', 'ⓒ', 'ⓓ', 'ⓔ', 'ⓕ', 'ⓖ', 'ⓗ', 'ⓘ', 'ⓙ', 'ⓚ', 'ⓛ', 'ⓜ', 'ⓝ', 'ⓞ', 'ⓟ', 'ⓠ', 'ⓡ', 'ⓢ', 'ⓣ', 'ⓤ', 'ⓥ', 'ⓦ', 'ⓧ', 'ⓨ', 'ⓩ'],
    str: ['ꗇ', 'ꕗ', 'ꖀ', 'ꕒ', 'ꗍ', 'ꘘ', 'ꗱ', 'ꖾ', 'ꕯ', 'ʆ', 'ꗣ', 'Ꝇ', 'ꕮ', 'ꖦ', 'ꗞ', 'ꘝ', 'ꕪ', '𐝥', 'ꕷ', 'ꖡ', 'ꖹ', 'ꘜ', 'Ⱳ', 'ꘉ', 'ꔇ', 'ꕩ'],
    cana: ['ᗅ', 'ᑲ', 'ᐸ', 'ᐅ', 'ᗕ', 'ᖴ', 'ᘜ', 'ᕼ', 'ᓵ', 'ᒍ', 'ᖾ', 'ᖶ', 'ᗑ', 'ᐱ', 'ᗝ', 'ᕈ', 'ᑫ', 'ᖇ', 'ᔑ', 'ᐪ', 'ᑌ', 'ᐯ', 'ᗐ', '᙭', 'ᖿ', 'ᔨ'],
    canad: ['ᗩ', 'ᗷ', 'ᑕ', 'ᗞ', 'ᕮ', 'ᒋ', 'ᕋ', 'ᖺ', 'ᑊ', 'ᒎ', 'ᕙ', 'ᘂ', 'ᘻ', 'ᘯ', 'ᗜ', 'ᑭ', 'ᘝ', 'ᖇ', 'ᔕ', 'ᘕ', 'ᕞ', 'ᕓ', 'ᘺ', '᙮', 'ᒉ', 'ᓯ'],
    par: ['⒜', '⒝', '⒞', '⒟', '⒠', '⒡', '⒢', '⒣', '⒤', '⒥', '⒦', '⒧', '⒨', '⒩', '⒪', '⒫', '⒬', '⒭', '⒮', '⒯', '⒰', '⒱', '⒲', '⒳', '⒴', '⒵'],
    chi: ['升', 'も', '亡', '冂', '㠪', '于', 'ム', '卅', '工', '亅', 'ズ', 'ㄥ', '冊', '力', '囗', 'ㄗ', '冋', '尺', '丂', '丁', '나', 'ソ', '丗', '义', 'ﾘ', '乙'],

};
function replaceNumbersWithBr(inputString) {
    // Replace all digits (0-9) with <br> using regular expression
    return inputString.replace(/\d/g, '<br>');
}
function getRandomUnicodeClass() {
    const keys = Object.keys(unicodeClasses);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return unicodeClasses[randomKey];
}

async function generateStylishText() {
    document.getElementById("loader").style.display="flex";
    let input;
    let textinput = document.getElementById('textInput').value; // Properly declare textinput
    const url = "https://short-term-severe-zebu.anvil.app/hello/" + textinput;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.text();
        input = data; // Now input is assigned

    } catch (error) {
        console.error(error);
        return; // Exit function if there's an error in fetching data
    }

    const numStyles = Object.keys(unicodeClasses).length;
    const numVariants = 33; // Number of stylish text variants to generate

    let stylishTexts = [];

    // Loop for variants
    for (let i = 0; i < numVariants; i++) {
        const styleClass = Object.keys(unicodeClasses)[i % numStyles];
        const styleChars = unicodeClasses[styleClass];
        let styledText = '';

        for (let char of input.toLowerCase()) {
            const index = 'abcdefghijklmnopqrstuvwxyz'.indexOf(char);
            if (index !== -1 && index < styleChars.length) {
                styledText += styleChars[index];
            } else {
                styledText += char;
            }
        }

        stylishTexts.push(styledText);
    }

    // Generate random styles
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < 14; i++) { // Declare i with let
        let stylishText = '';

        for (const char of input.toLowerCase()) {
            let unicodeClass = getRandomUnicodeClass();
            if (alphabet.includes(char)) {
                const index = alphabet.indexOf(char);
                stylishText += unicodeClass[index];
            } else {
                stylishText += char; // Add non-alphabet characters as is
            }
        }

        stylishTexts.push(stylishText);
    }

    // Display all stylish texts
    document.getElementById("loader").style.display="none";
    document.getElementById('output').innerHTML = replaceNumbersWithBr(stylishTexts.map(text => `<div>${text}</div>`).join(''));
}