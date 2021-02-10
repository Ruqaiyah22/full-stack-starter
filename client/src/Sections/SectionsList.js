import {useEffect, useState} from 'react';

import Api from '../Api';

function SectionsList(){
    const [sections, setSections] = useState([{name: 'Test 1'}, {name: 'Test 2'}]);

    useEffect(function() {
        Api.sections.index().then(response => setSections(response.data));
    }, []);

    return (
        <main className="container">
        <h1>Sections List</h1>
        <ul>
            {sections.map(s => (
                <li>{s.name}</li>
            ))}
        </ul>
        </main>
    );
}

export default SectionsList;