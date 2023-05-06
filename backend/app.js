const { PythonShell } = require('python-shell');

let coin = 'bitcoin';

let options = {
    mode: 'text',
    pythonPath: 'C:/Program Files/WindowsApps/PythonSoftwareFoundation.Python.3.9_3.9.3568.0_x64__qbz5n2kfra8p0/python3.9.exe', // Replace with the path to your python installation
    pythonOptions: ['-u'],
    scriptPath: '', // Replace with the path to your python script
    args: [coin]
};

PythonShell.run('coinGeckoAPI.py', options, function (err, result) {
    if (err) throw err;
    let jsonResult = JSON.parse(result[0]);
    console.log(jsonResult);
});
