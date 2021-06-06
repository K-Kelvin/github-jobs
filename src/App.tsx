import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages/Home";
import JobDetail from "pages/JobDetail";

function App() {
    return (
        <Router>
            <div className="App p-3 sm:p-6 md:py-9 lg:px-32 lg:py-8">
                <h1 className="text-2xl font-light mb-8 text-black font-poppins">
                    <span className="font-bold">Github</span> jobs
                </h1>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/position/:id">
                        <JobDetail />
                    </Route>
                    <Route>
                        <div className="text-4xl text-black text-center">
                            Page Not Found
                        </div>
                    </Route>
                </Switch>

                <footer className="text-center text-gray-400 my-8 font-poppins">
                    created by{" "}
                    <a
                        href="https://github.com/K-Kelvin"
                        className="font-bold underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Kijanda
                    </a>{" "}
                    - devChallenges.io
                </footer>
            </div>
        </Router>
    );
}

export default App;
