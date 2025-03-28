import React from "react";

const ReverseString = ({ inputString }) => {
    const reversedString = inputString.split("").reverse().join("");
    const isPalindrome = inputString.toLowerCase() === reversedString.toLowerCase();

    return (
        <div>
            <p>Reversed String: {reversedString}</p>
            <p>{isPalindrome ? "It's a palindrome!" : "It's not a palindrome."}</p>
        </div>
    );
};

export default ReverseString;
