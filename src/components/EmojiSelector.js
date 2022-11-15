import React from "react";

function EmojiSelector({ onChange, foodEmoji }){

    const emojiArray = ["🍽","🍏","🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🍈","🍒","🍑","🥭","🍍","🥥","🥝","🍅","🍆","🥑","🥦","🥬","🥒","🌶","🌽","🥕","🧄","🧅","🥔","🍠","🥐","🥯","🍞","🥖","🥨","🧀","🥚","🍳","🧈","🥞","🧇","🥓","🥩","🍗","🍖","🦴","🌭","🍔","🍟","🍕","🥪","🥙","🧆","🌮","🌯","🥗","🥘","🥫","🍝","🍜","🍲","🍛","🍣","🍱","🥟","🦪","🍤","🍙","🍚","🍘","🍥","🥠","🥮","🍢","🍡","🍧","🍨","🍦","🥧","🧁","🍰","🎂","🍮","🍭","🍬","🍫","🍿","🍩","🍪","🌰","🥜","🍯","🥛","🍼","☕️","🍵","🧃","🥤","🍶","🍺","🍻","🥂","🍷","🥃","🍸","🍹","🧉","🍾","🧊","🥄","🍴","🥣","🥡","🥢","🧂"]
    //Uses props passed down from AddFood to render drop down with emojiArray as options + update state in AddFood
    return(
        <div>
            <select name="emojiSelect" id="emojis" onChange={onChange} className="selectEmojis" value={foodEmoji==="🍽" ? "Select Emoji..." : foodEmoji}>
                <option>Select Emoji...</option>
                {emojiArray.map(emoji=><option key={emoji}>{emoji}</option>)}
             </select>
        </div>
    )
}
export default EmojiSelector