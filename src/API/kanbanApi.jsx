export function InscriptionApi(form) {
    
return fetch('https://trello.jdedev.fr/api/user/', {

    method: 'POST',
    body: JSON.stringify({

        nom: form.nom,
        mdp: form.mdp,
        email: form.email
        
    }),

    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
}).then(function (response) {

    if (response.ok) {
        return response.json();
    }
    return Promise.reject(response);

})

}

export function LoginApi(form) {
    
    return fetch('https://trello.jdedev.fr/api/user/connect', {

    method: 'POST',
    body: JSON.stringify({

        nom: form.login,
        mdp: form.pass
        
    }),

    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
}).then(function (response) {

    if (response.ok) {
        return response.json();
    }
    return Promise.reject(response);

})

}


export function CompteApi(form) {
    
    return fetch('https://trello.jdedev.fr/api/user/61a8cfeb696c7d7e14c2b8da', {

    method: 'PUT',
    body: JSON.stringify({

        nom: form.nom,
        mdp: form.mdp,
        email:form.email
        
    }),

    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
}).then(function (response) {

    if (response.ok) {
        return response.json();
    }
    return Promise.reject(response);

})

}

export function RecupTachesApi() {
    
    return fetch('https://trello.jdedev.fr/api/user/61a8cfeb696c7d7e14c2b8da', {

    method: 'GET',
  

    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
}).then(function (response) {

    if (response.ok) {
        return response.json();
    }
    return Promise.reject(response);

})

}

export function supprimer(numIndex, _id) {
    
    return fetch ('https://trello.jdedev.fr/api/user/61a8cfeb696c7d7e14c2b8da/tache/' + _id, {

        method: 'DELETE',

        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }

    })

    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
        }) 

}
export function moveleft(copie, numIndex) {

    return fetch ('https://trello.jdedev.fr/api/user/61a8cfeb696c7d7e14c2b8da/tache/' + numIndex, {
        
        method: 'PUT',

        body: JSON.stringify( {

            title: copie[numIndex].title,
            content: copie[numIndex].content,
            etat: copie[numIndex].state

        }),

        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }

        
    })
    
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
        }) 
}

export function moveright(copie, numIndex) {

    return fetch ('https://trello.jdedev.fr/api/user/61a8cfeb696c7d7e14c2b8da/tache/' + numIndex, {
        
        method: 'PUT',

        body: JSON.stringify( {

            titre: copie[numIndex].title,
            contenu: copie[numIndex].content,
            etat: copie[numIndex].state

        }),

        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }

        
    })
    
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
        }) 
}