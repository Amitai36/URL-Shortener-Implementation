import Plot from "react-plotly.js"
import { Typography } from "@mui/material"
import { useLocation } from "react-router-dom"

import { useGetAnalitics } from "../api/query"

function Analitics() {

  const { state: { shortUrl } } = useLocation()
  const { data, isLoading } = useGetAnalitics({ shortUrl })

  if (isLoading) {
    return <Typography variant="h4">Loading...</Typography>
  }
  if (!data && !isLoading) {
    return <Typography variant="h4">NO DATA</Typography>
  }
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
