// Fake Login
function doFakeLogin()
{
    // Recebendo dados
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;
    let remember = document.querySelector('#remember').checked;
    // Processando
    if((login.length >= 4 && senha.length >= 6) && (login.length <= 18 && senha.length <= 18))
    {
        // setando cookies para fake login
        if(remember){
            setCookie("usuario", login, 1);
            setCookie("senha", senha, 1);
        } 
        else 
        {
            setCookieClose("usuario", login);
            setCookieClose("senha", senha);
        }

        // tendo certeza de que foi gravado algum cookie
        if(getCookie("usuario") && getCookie("senha")) {
            window.location.href = "./";// index
        }else{ 
            alert('Erro ao checar por cookies.');
            location.reload();// recarrega pagina
        }
    }else
    {
        alert('Usuario / senha muito longa ou curta demais.');
        location.reload();// recarrega pagina
    }
}


// Função que cria / modifica os cookies
function setCookie(cname, cvalue, exdays)
{
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=./";
}

// Função que cria / modifica os cookies e deleta se fechar o navegador
function setCookieClose(cname, cvalue)
{
    document.cookie = cname + "=" + cvalue + ";path=./; Expires=;";
}

// Função para pegar um cookie
function getCookie(cname)
{
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');

    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];

        while (c.charAt(0) == ' ')
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0)
        {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//Função que deleta os cookies
function delete_cookies(name)
{
    document.cookie = name +'=; Path=./; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


// Deslogando
function logout()
{
    // Deleta os cookies
    delete_cookies("usuario");
    delete_cookies("senha");

    if(!getCookie("usuario") && !getCookie("senha")){
        location.href = "./login.html";
    }else{ alert('Erro no logout.'); location.reload(); }
}