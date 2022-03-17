Pedro Henrique Cruz Ubine

# Notas Full Stack Open

## Parte zero.

### HTTP GET

O servidor e o browser se comunicam usando o protocolo **HTTP**(Hypertext Transfer Protocol) que é um protocolo com o foco de transmitir hipermídia documentos como **HTML**.  

Observando o website https://studies.cs.helsinki.fi/exampleapp/  

Quando entramos no website observamos que é feito comando **GET**   

![Imagem](Imagens\img_0\get_website.png)  Imagem 1.

É possível ver no cabeçalhos dados como o tamanho e a data em que o arquivo foi transferido,  também é possível ver que na resposta do arquivo /exampleapp/ houve um retorno de um arquivo **UTF=8** sendo que esse arquivo é na verdade o **HTML** da pagina.

![Imagem](Imagens\img_0\rensponse_html.png)Imagem 2.

Olhando a reposta do /exampleapps/ bruto podemos ver o arquivo HTML que o servidor mandou de volta para o browser. Como dentro do HTML também possui uma imagem o browser ao ler o arquivo fara a requisição da imagem sendo ela a "kuva.png".

![7e](Imagens\img_0\7e.png)
Imagem 3

A imagem 3 resume as chamadas entre o browser e o servidor.

### Traditional web applications

A pagina estudada até o momento age de maneira tradicional, ou seja quando entramos nela o pegamos o arquivo HTML e mostramos oque o conteúdo do arquivo.
O servidor pode ter formatado o HTML de varias formos *estaticamente*, ou seja o arquivo já estava salvo, ou *dinamicamente*, em que roda um código para formar o arquivo HTML , a da pagina que acessamos funciona dinamicamente pois ele pega a quantidade de notas criada e coloca no arquivo HTML esse valor, como é possível ver no código a seguir:

```html
const getFrontPageHtml = (noteCount) => {
  return(`
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        <div class='container'>
          <h1>Full stack example app</h1>
          <p>number of notes created ${noteCount}</p>
          <a href='/notes'>notes</a>
          <img src='kuva.png' width='200' />
        </div>
      </body>
    </html>
`)
} 

app.get('/', (req, res) => {
  const page = getFrontPageHtml(notes.length)
  res.send(page)
})
```



