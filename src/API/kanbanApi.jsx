const urlAPI= 'https://trello.jdedev.fr/api/'


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


export function CompteApi(form, userId) {
    
    return fetch('https://trello.jdedev.fr/api/user/' + userId, {

    method: 'PUT',
    body: JSON.stringify({

        nom: form.nom_modif,
        mdp: form.mdp_modif,
        email:form.mail_modif
        
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

export function EnvoiTachesApi(userId) {

    return fetch('https://trello.jdedev.fr/api/user/'+ userId + '/tache/', {

        method: 'POST',
        body: JSON.stringify({

            titre: '',
            contenu: '',
            etat: 0
            
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

export function RecupTachesApi(userId) {
    
    return fetch('https://trello.jdedev.fr/api/user/'+userId, {

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

export function supprimer(numIndex, _id, userId) {
    
    return fetch ('https://trello.jdedev.fr/api/user/'+userId + '/tache/' + _id, {

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
export function moveleft(copie, numIndex, userId) {

    return fetch ('https://trello.jdedev.fr/api/user/'+userId+'/tache/' + numIndex, {
        
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

export function moveright(copie, numIndex, userId) {

    return fetch ('https://trello.jdedev.fr/api/user/'+userId+'/tache/' + numIndex, {
        
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

export function RecupModiApi(copie, numIndex, userId) {

    return fetch ('https://trello.jdedev.fr/api/user/'+userId+'/tache/' + numIndex, {
        
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