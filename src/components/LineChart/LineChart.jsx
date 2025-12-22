import { Line, LineChart as Lc,XAxis, YAxis, } from 'recharts';

const LineChart = () => {
   const studentMarks = [
  { id: 1, name: "Ayaan Rahman", math: 78, physics: 72, chemistry: 75 },
  { id: 2, name: "Nusrat Jahan", math: 85, physics: 80, chemistry: 82 },
  { id: 3, name: "Siam Ahmed", math: 92, physics: 88, chemistry: 90 },
  { id: 4, name: "Rafi Hasan", math: 66, physics: 70, chemistry: 68 },
  { id: 5, name: "Mim Akter", math: 74, physics: 76, chemistry: 73 },
  { id: 6, name: "Tahmid Khan", math: 88, physics: 85, chemistry: 87 },
  { id: 7, name: "Sadia Islam", math: 90, physics: 92, chemistry: 89 },
  { id: 8, name: "Arif Hossain", math: 69, physics: 65, chemistry: 67 },
  { id: 9, name: "Jannat Ara", math: 81, physics: 78, chemistry: 80 },
  { id: 10, name: "Fahim Chowdhury", math: 95, physics: 93, chemistry: 94 }
];


    return (
        <div>
            <Lc data={studentMarks}  width={800} height={300}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
        <Line dataKey="math" stroke='red'></Line>
        <Line dataKey="physics"></Line>
        <Line dataKey="chemistry"  stroke='green'></Line>
            </Lc>
        </div>
    );
};

export default LineChart;