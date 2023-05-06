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
});

// Listen for the Python process to exit
pythonProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});

console.log("Started Python process...");
