import { useEffect, useState } from "react";
import {useHistory, useParams} from "react-router-dom";
import Api from "../Api";

function SkillsForm() {
    const {id} = useParams();
    const history = useHistory();
    const [skills, setSkills] = useState({
        name: '',
    });

    useEffect(function(){
        if (id) {
            Api.skills.get(id).then((response) => setSkills(response.data));
        }
    }, []);

    function onChange(event) {
        const newSkill = {...skills};
        newSkill[event.target.name] = event.target.value;
        setSkills(newSkill);
    }

    async function onSubmit(event){
        event.preventDefault();
        try {
            if (id) {
                await Api.skills.update(id, skills);
            } else {
                await Api.skills.create(skills);
            }
            history.push('/skills');
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <main className="container">
        <h1>Skills Form</h1>
        <form onSubmit={onSubmit}>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input className="form-control" type="text" name="name" value={skills.name} onChange={onChange} />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
        </form>
        <p>{JSON.stringify(skills.name)}</p>
    </main>
    )
}

export default SkillsForm;