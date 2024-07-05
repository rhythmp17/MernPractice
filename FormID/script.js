const HandleSubmit = (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const designation = document.getElementById('designation').value;
    const id = document.getElementById('ID').value;
    const dob = document.getElementById('DOB').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    
    document.getElementById('IDCardForm').style.display = 'none';
    const preview = document.getElementById('preview');
    preview.style.display = 'block';

    document.getElementById('previewName').innerText = `Name: ${name}`;
    document.getElementById('previewDesignation').innerText = `Designation: ${designation}`;
    document.getElementById('previewID').innerText = `ID: ${id}`;
    document.getElementById('previewDOB').innerText = `DOB: ${dob}`;
    document.getElementById('previewContact').innerText = `Contact: ${contact}`;
    document.getElementById('previewEmail').innerText = `Email: ${email}`;
}

const goBack = () => {
    document.getElementById('IDCardForm').style.display = 'block';
    document.getElementById('preview').style.display = 'none';
    document.getElementById('name').value = document.getElementById('previewName').innerText.split(': ')[1];
    document.getElementById('designation').value = document.getElementById('previewDesignation').innerText.split(': ')[1];
    document.getElementById('ID').value = document.getElementById('previewID').innerText.split(': ')[1];
    document.getElementById('DOB').value = document.getElementById('previewDOB').innerText.split(': ')[1];
    document.getElementById('contact').value = document.getElementById('previewContact').innerText.split(': ')[1];
    document.getElementById('email').value = document.getElementById('previewEmail').innerText.split(': ')[1];
}
