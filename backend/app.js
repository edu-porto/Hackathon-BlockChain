const express = require('express');
const { PythonShell } = require('python-shell');

const app = express();
const port = 3000;

let coin = 'bitcoin';

let options = {
    pythonPath: 'C:/Program Files/WindowsApps/PythonSoftwareFoundation.Python.3.9_3.9.3568.0_x64__qbz5n2kfra8p0/python3.9.exe', // Replace with the path to your python installation
    scriptPath: '', // Replace with the path to your python script
    args: [coin]
};

app.get('/report', (req, res) => {
    PythonShell.run('coinGeckoAPI.py', options)
        .then((result) => {
            console.log('Python script execution completed.');
            res.send(result);
        })
        .catch((err) => {
            console.log('An error occurred:', err);
            res.send('Error occurred during Python script execution.');
        });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
