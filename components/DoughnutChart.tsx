import {Chart as ChartJS,ArcElement,Tooltip,Legend} from 'chart.js';
import{Doughnut} from 'react-chartjs-2';
ChartJS.register(ArcElement,Tooltip,Legend);
const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const DoughnutChart=({accounts}:DoughnutChartProps)=>{
        const data = {
            datasets:[
                {
                    label:'Banks',
                    data:{1250,2500,37}
            ]    return <Doughnut data={[]}/>
}
export default DoughnutChart;