import React, { useState, useEffect } from "react";
import "./pagecomponents.css";

const Pagecomponents = () => {
  const [api_key, setApiKey] = useState("");
  const [model, setModel] = useState("");
  const [format, setFormat] = useState("");
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    retrieveDefaultValuesFromLocalStorage();
    setupButtonListeners();
  }, []);

  const getSettingsFromForm = (settings, callback) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("url", url);
    formData.append("api_key", api_key);
    formData.append("model", model);
    formData.append("format", format);

    settings.body = formData;
    callback(settings);
  };

  const infer = () => {
    setOutput("Inferring...");

    getSettingsFromForm(
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
      },
      (settings) => {
        fetch("YOUR_API_ENDPOINT", settings)
          .then((response) => response.json())
          .then((data) => setOutput(JSON.stringify(data, null, 2)))
          .catch((error) => {
            setOutput(
              [
                "Error loading response.",
                "",
                "Check your API key, model, version,",
                "and other parameters",
                "then try again.",
              ].join("\n")
            );
          });
      }
    );
  };

  const retrieveDefaultValuesFromLocalStorage = () => {
    try {
      const storedApiKey = localStorage.getItem("rf.api_key");
      const storedModel = localStorage.getItem("rf.model");
      const storedFormat = localStorage.getItem("rf.format");

      if (storedApiKey) setApiKey(storedApiKey);
      if (storedModel) setModel(storedModel);
      if (storedFormat) setFormat(storedFormat);
    } catch (e) {
      // Handle localStorage disabled gracefully
    }
  };

  const setupButtonListeners = () => {
    // Handle button click events
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleUploadButtonClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="cover">
      <p className="cover-p">
        Upload the following picture for the prediction.
      </p>
      <div className="button" onClick={handleUploadButtonClick}>
        <p>Upload</p>
      </div>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div className="result-box">
        <pre id="output">{output}</pre>
      </div>
      {/* Add other necessary JSX elements */}
    </div>
  );
};

export default Pagecomponents;
