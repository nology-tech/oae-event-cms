const HandleDelete = (e) => {
   
    e.preventDefault();
    fetch('http://localhost:8080/events/{id}',{ 
        method: 'DELETE', })
    .then(() => this.setDataArr({ status: 'Delete successful' }));
}

export default HandleDelete;