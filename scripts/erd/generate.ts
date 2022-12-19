import db from '../../database/sequelize'
import sequelizeErd  from '.'
import { writeFileSync } from 'fs'

sequelizeErd({
    source: db,
    engine: 'circo',
  })
    .then(svg => {
      writeFileSync('./database/erd.svg', svg);
    })
    .catch(e => {
      console.error(e);
    });