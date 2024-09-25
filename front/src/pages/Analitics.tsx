import Plot from "react-plotly.js"
import { Typography } from "@mui/material"
import { useLocation } from "react-router-dom"

import { useGetAnalitics } from "../api/query"


//main page for Analitics and display on graph
function Analitics() {
  //get a state form useNavigate
  const { state: { shortUrl } } = useLocation()
  //get call from db
  const { data, isLoading } = useGetAnalitics({ shortUrl })

  if (isLoading) {
    return <Typography variant="h4">Loading...</Typography>
  }
  if (!data && !isLoading) {
    return <Typography variant="h4">NO DATA</Typography>
  }
  //order by x, y from data
  const x = Object.keys(data)
  const y = Object.values(data)

  return (
    <div>
      <Plot
        config={{
          autosizable: true,
          responsive: true,
          displaylogo: false,
        }}
        data={[
          {
            x,
            y,
            type: "scatter",
            marker: { color: "red" },
            name: "scatter",
          },
        ]}
        layout={{
          showlegend: false,
          autosize: false,
          title: {
            text: "Link by days",
            xanchor: "center",
            font: {
              color: "#fff",
            },
          },
          paper_bgcolor: "#37414b",
          plot_bgcolor: "#37414b",
          xaxis: { color: "#fff", title: "Dates", type: "date" },
          yaxis: { color: "#fff", title: "Sum" },
          height: 400,
          width: 400,
        }}
        style={{
          height: "100%",
          width: "100%",
          justifyContent: "center",
          display: "flex",
          position: "relative",
        }}
      />
    </div>
  )
}

export default Analitics
