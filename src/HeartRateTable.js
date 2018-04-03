import React from 'react';
import Table, {TableBody, TableHead, TableRow, TableCell} from 'material-ui/Table';

export default class HeartRateTable extends React.Component {

      render() {

          const email = this.props.email;
          const heartRates = this.props.heartRates;
          const times = this.props.times;

            return (
                 <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell numeric>Heart Rate (bpm)</TableCell>
                        <TableCell numeric>Time (YYYY-MM-DD HH-MM-SS.ssssss)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        {heartRates.map((heartRate, n) => {
                        return (
                            <TableRow key={n}>
                                <TableCell> {email} </TableCell>
                                <TableCell numeric>{heartRates[n]}</TableCell>
                                <TableCell numeric>{times[n]}</TableCell>
                            </TableRow>
                        );
                         })}
                    </TableBody>
                  </Table>
            );
      }
}