import { Injectable } from '@angular/core';


@Injectable()
export class Morse {

    private static textToMorseMap = {

        'a': '.-',
        'b': '-...',
        'c': '-.-.',
        'd': '-..',
        'e': '.',
        'f': '..-.',
        'g': '--.',
        'h': '....',
        'i': '..',
        'j': '.---',
        'k': '-.-',
        'l': '.-..',
        'm': '--',
        'n': '-.',
        'o': '---',
        'p': '.--.',
        'q': '--.-',
        'r': '.-.',
        's': '...',
        't': '-',
        'u': '..-',
        'v': '...-',
        'w': '.--',
        'x': '-..-',
        'y': '-.--',
        'z': '--..',

        '0': '-----',
        '1': '.----',
        '2': '..---',
        '3': '...--',
        '4': '....-',
        '5': '.....',
        '6': '-....',
        '7': '--...',
        '8': '---..',
        '9': '----.',

        'ä': '.-.-',
        'á': '.--.-',
        'å': '.--.-',
        'é': '..-..',
        'ñ': '--.--',
        'ö': '---.',
        'ü': '..--',
        'ch': '----',

        '&': '.-...',
        '\'': '.----.',
        '@': '.--.-.',
        ')': '-.--.-',
        '(': '-.--.',
        ':': '---...',
        ',': '--..--',
        '=': '-...-',
        '!': '-.-.--',
        '.': '.-.-.-',
        '-': '-....-',
        '+': '.-.-.',
        '"': '.-..-.',
        '?': '..--..',
        '/': '-..-.',

    };



    private static morseToTextMap = {
        '.-': 'a',
        '-...': 'b',
        '-.-.': 'c',
        '-..': 'd',
        '.': 'e',
        '..-.': 'f',
        '--.': 'g',
        '....': 'h',
        '..': 'i',
        '.---': 'j',
        '-.-': 'k',
        '.-..': 'l',
        '--': 'm',
        '-.': 'n',
        '---': 'o',
        '.--.': 'p',
        '--.-': 'q',
        '.-.': 'r',
        '...': 's',
        '-': 't',
        '..-': 'u',
        '...-': 'v',
        '.--': 'w',
        '-..-': 'x',
        '-.--': 'y',
        '--..': 'z',

        '-----': '0',
        '.----': '1',
        '..---': '2',
        '...--': '3',
        '....-': '4',
        '.....': '5',
        '-....': '6',
        '--...': '7',
        '---..': '8',
        '----.': '9',

        '.-.-': 'ä',
        '.--.-': 'á',
        '..-..': 'é',
        '--.--': 'ñ',
        '---.': 'ö',
        '..--': 'ü',
        '----': 'ch',

        '.-...': '&',
        '.----.': '\'',
        '.--.-.': '@',
        '-.--.-': ')',
        '-.--.': '(',
        '---...': ':',
        '--..--': ',',
        '-...-': '=',
        '-.-.--': '!',
        '.-.-.-': '.',
        '-....-': '-',
        '.-.-.': '+',
        '.-..-.': '"',
        '..--..': '?',
        '-..-.': '/',

    };



    public static test() {
        console.log(this.textToMorseMap['a']);
        console.log(this.morseToTextMap['.-...']);
    }

    public static ToMorse(text: String) {
        text = text.toLowerCase();
        let result: String = '';
        let words = text.split(' ');
       // console.log(words);

        words.forEach(word => {
            for (var i = 0; i < word.length; i++) {
                result+=this.textToMorseMap[word.charAt(i)];
                result+=' '; 
            }
            result+='    '; 
        });
        console.log(result);
         return result;
    }

    public static ToEnglish(text: String) {
        let result: String = '';
        let words = text.split('     ');

        console.log(words);
            

        words.forEach(word => {
           let letters = word.split(' ');
           
           letters.forEach(letter => {
             console.log(letter);
             result+=this.morseToTextMap[letter];
           });
           result+=' ';
        });
        console.log(result);
        return result;
    }

}
