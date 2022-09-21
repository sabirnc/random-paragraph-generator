const text = [
 `    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, fugiat? Vel ducimus minus atque dolorum corporis odio.
      Ipsa deserunt ea fugit numquam, magni veritatis distinctio officia ducimus aut repellendus libero earum veniam debitis illum. 
      Harum maiores nemo eos dolores, atque sapiente impedit earum a tempore expedita. Ipsa adipisci nihil aut.
 `,
 `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, fugiat? Vel ducimus minus atque dolorum corporis odio.
 Ipsa deserunt ea fugit numquam, magni veritatis distinctio officia ducimus aut repellendus libero earum veniam debitis illum. 
 Harum maiores nemo eos dolores, atque sapiente impedit earum a tempore expedita. Ipsa adipisci nihil aut 22.
`,
`    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, fugiat? Vel ducimus minus atque dolorum corporis odio.
Ipsa deserunt ea fugit numquam, magni veritatis distinctio officia ducimus aut repellendus libero earum veniam debitis illum. 
Harum maiores nemo eos dolores, atque sapiente impedit earum a tempore expedita. Ipsa adipisci nihil aut 33.
`,
`    Lorem, ipsum dolor sit amet consectetur adipisicing 333. Hic, fugiat? Vel ducimus minus atque dolorum corporis odio.
Ipsa deserunt ea fugit numquam, magni veritatis distinctio officia ducimus aut repellendus libero earum veniam debitis illum. 
Harum maiores nemo eos dolores, atque sapiente impedit earum a tempore expedita. Ipsa adipisci nihil aut 555555.
`,
`    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, fugiat? Vel ducimus minus atque dolorum corporis odio.
Ipsa deserunt ea fugit numquam, magni veritatis distinctio officia ducimus aut repellendus libero earum veniam debitis illum. 
Harum maiores nemo eos dolores, atque sapiente impedit earum a tempore expedita. Ipsa adipisci nihil aut 44444.
`,
`    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, fugiat? Vel ducimus minus atque dolorum corporis odio.
Ipsa deserunt ea fugit numquam, magni veritatis distinctio officia ducimus aut repellendus libero earum veniam debitis illum. 
Harum maiores nemo eos dolores, atque sapiente impedit earum a tempore expedita. Ipsa adipisci nihil aut 7.
`,
`    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, fugiat? Vel ducimus minus atque dolorum corporis odio.
Ipsa deserunt ea fugit numquam, magni veritatis distinctio officia ducimus aut repellendus libero earum veniam debitis illum. 
Harum maiores nemo eos dolores, atque sapiente impedit earum a tempore expedita. Ipsa adipisci nihil aut 6.
`
]

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const result = document.querySelector("article")


form.addEventListener("submit",(e) => {
    e.preventDefault()
    const value = Number(amount.value)
    const checkNumber = Math.sign(value)
    const random = Math.floor( Math.random() * text.length)

    
    if(checkNumber > 0){
        console.log("generating paragraph")
        const paraNumber = text.slice(0,value)
        const array = paraNumber.map( para => `<p>${para}</p><br>`)
        result.innerHTML =  array
       

    }else{
        result.innerHTML = `<p>${text[random]}</p>`
    }
    amount.value = ""
    
})