import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";


import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <QueryClientProvider client = {QueryClient}>
            
                <App/>
            
        </QueryClientProvider>
    </React.StrictMode>
)
