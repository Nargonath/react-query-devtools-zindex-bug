<div align="center">
  <h1>React-Query Devtools zIndex bug</h1>
  <strong>Repo to reproduce a bug with React-Query-Devtools and HeadlessUI Dialog component</strong>
</div>

<hr>

# Reproduce

- Run `npm run dev`.
- Go to [http://localhost:5173](http://localhost:5173).
- Click "Open dialog".
- Try clicking the devtool button and notice that the dialog backdrop gets the click event instead.
