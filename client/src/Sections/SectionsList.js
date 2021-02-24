import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Api from '../Api';

function SectionsList(){
    const [sections, setSections] = useState([{name: 'Test 1'}, {name: 'Test 2'}]);

    useEffect(function() {
        Api.sections.index().then(response => setSections(response.data));
    }, []);

    function onDelete(section){
        if (window.confirm(`Are you sure you want to delete ${section.name}?`)){
            // we'll execute code to delete the section
            Api.sections.delete(section.id).then(function() {
                const newSections = sections.filter(s => s.id !== section.id);
                setSections(newSections);
            });
        }
    }

    return (
        <main className="container">
        <h1>Sections List</h1>
        <Link className="btn btn-primary" to="/sections/new">New</Link>
        <ul>
            {sections.map(s => (
                <li>
                    <p><Link to={`/sections/${s.id}/edit`}>{s.name}, {s.slug}, {s.position}</Link></p>
                    <p><button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                </li>
            ))}
        </ul>
        </main>
    );
}

export default SectionsList;