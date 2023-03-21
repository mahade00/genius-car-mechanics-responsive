import React from 'react';
import Expert from '../Expert/Expert';
import m1 from '../../images/mechanic/m1.jpg';
import m2 from '../../images/mechanic/m2.jpg';
import m3 from '../../images/mechanic/m3.jpg';
import m4 from '../../images/mechanic/m4.jpg';

  const experts = [
      {
        id:1,
      img:m1,
      name: 'Anderw Smith',
      expertize: '-Engine Expert-'
  },
      {
        id:2,
      img:m2,
      name: 'Anderw Smith',
      expertize: '-Engine Expert-'
  },
      {
        id:3,
      img:m3,
      name: 'Anderw Smith',
      expertize: '-Engine Expert-'
  },
      {
        id:4,
      img:m4,
      name: 'Anderw Smith',
      expertize: '-Engine Expert-'
  },
]
const Experts = () => {
    return (
        <div id='experts' className='container mt-5'>
            <h2 className='text-primary'>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
}
            </div>
        </div>
    );
};

export default Experts;