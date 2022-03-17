Pedro Henrique Cruz Ubine

# Notas Full Stack Open

## Parte zero.

### HTTP GET

O servidor e o browser se comunicam usando o protocolo **HTTP**(Hypertext Transfer Protocol) que é um protocolo com o foco de transmitir hipermídia documentos como **HTML**.  

Observando o website https://studies.cs.helsinki.fi/exampleapp/  

Quando entramos no website observamos que é feito comando **GET**   

![Imagem](D:\Projetos\fs_open\Full-Stack-Open\notes\Imagens\img_0\get_website.png)  Imagem 1.

É possível ver no cabeçalhos dados como o tamanho e a data em que o arquivo foi transferido,  também é possível ver que na resposta do arquivo /exampleapp/ houve um retorno de um arquivo **UTF=8** sendo que esse arquivo é na verdade o **HTML** da pagina.
![Imagem](D:\Projetos\fs_open\Full-Stack-Open\notes\Imagens\img_0\rensponse_html.png)
Imagem 2.

Olhando a reposta do /exampleapps/ bruto podemos ver o arquivo HTML que o servidor mandou de volta para o browser. Como dentro do HTML tambem possui uma imagem o browser ao ler o arquivo fara a requisição da imagem sendo ela a "kuva.png".

![7e](D:\Projetos\fs_open\Full-Stack-Open\notes\Imagens\img_0\7e.png)
Imagem 3
A imagem 3 resume as chamadas entre o browser e o servidor.