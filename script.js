/* Global Styles */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
}

/* Header */
header {
    background-color: #333;
    color: white;
    padding: 60px 0;
    text-align: center;
}

.profile-pic {
    width: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
}

h1 {
    font-size: 2.5em;
    margin: 0;
}

header p {
    font-size: 1.2em;
    margin: 10px 0 0;
}

/* Section Styles */
section {
    padding: 60px 0;
    background-color: white;
    margin-bottom: 20px;
}

section h2 {
    text-align: center;
    font-size: 2em;
    color: #333;
    margin-bottom: 30px;
}

section p, section li {
    font-size: 1.1em;
    line-height: 1.6;
}

#skills ul {
    list-style-type: none;
    padding: 0;
}

#skills ul li {
    margin: 10px 0;
    padding-left: 20px;
    position: relative;
}

#skills ul li:before {
    content: "✓";
    color: #3498db;
    position: absolute;
    left: 0;
}

.job {
    margin-bottom: 30px;
}

/* Footer */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px;
}
