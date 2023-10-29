function generatePassword(generateBtn, password){
    generateBtn.addEventListener("click", ()=>{
        let generatedPassword = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@_!#№';

        for (let i = 0; i < 12; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            generatedPassword += characters.charAt(randomIndex);
        }
        password.innerText = generatedPassword;
    })
}
function copyPassword(copyBtn, password, container){
    copyBtn.addEventListener("click", ()=>{
        const copyCheck = document.createElement('div');
        copyCheck.classList.add('copyCheck');
        navigator.clipboard.writeText(password.innerText)
            .then(() => {
                copyCheck.innerText = 'Text is copied';
                console.log('Text is copied');
            })
            .catch(err => {
                copyCheck.innerText = 'Something went wrong';
                console.log('Something went wrong', err);
            });
        container.appendChild(copyCheck);
        setTimeout(() => {
            container.removeChild(copyCheck);
        }, 3000);
    })
}
async function main(){
    const copyBtn = document.querySelector('#copy');
    const generateBtn = document.querySelector('#generate');
    const password = document.querySelector('.password');
    const container = document.querySelector('.container');
    copyPassword(copyBtn, password, container);
    generatePassword(generateBtn, password);
}

main();