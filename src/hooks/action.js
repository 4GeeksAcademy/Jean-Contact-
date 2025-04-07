export const fetchAgenda = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/jeankender");
    let data = await response.json();


    if (data.detail == `Agenda "jeankender" doesn't exist.`) {
        createAgenda(); // call function to create agenda
    }
    dispatch({
        type: "set_agenda",
        payload: { agenda: data.slug, contacts: data.contacts },
    });

}

export const createAgenda = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/jeankender", {
        method:"POST",
        headers: {"content-type": "application/json"}
    })
        let data = await response.json()
    fetchAgenda()

}

export const getContacts = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/jeankender/contacts");
    let data = await response.json();

    dispatch({
        type: "get_contacts",
        payload: { contacts: data.contacts },
    });

}


