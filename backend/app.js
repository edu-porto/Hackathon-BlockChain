<<<<<<< HEAD
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
=======
const spawn = require("child_process").spawn;

// Spawn a new Python process and pass in two arguments
const pythonProcess = spawn('C:/Program Files/WindowsApps/PythonSoftwareFoundation.Python.3.9_3.9.3568.0_x64__qbz5n2kfra8p0/python3.9.exe', ["hello.py", "12", "2"]);

// Listen for data on the stdout stream of the Python process
pythonProcess.stdout.on('data', (data) => {
    // Do something with the data returned from the Python script
    console.log(data.toString());
});

// Listen for any errors that occur while running the Python process
pythonProcess.stderr.on('data', (data) => {
    console.error(data.toString());
>>>>>>> parent of 3e53e41 (Merge pull request #2 from edu-porto/backend)
});

// Listen for the Python process to exit
pythonProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});

console.log("Started Python process...");
