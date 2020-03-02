import tv_off from '../icons/tv_off.png'
import tv_on from '../icons/tv_on.png'
import tv_standby from '../icons/tv_standby.png'
import washingMachine_off from '../icons/washingMachine_off.png'
import washingMachine_on from '../icons/washingMachine_on.png'
import airConditioner_off from '../icons/airConditioner_off.png'
import airConditioner_on from '../icons/airConditioner_on.png'

const appliances = {
    'Television': {
        name: 'Television',
        status: ['on', 'off', 'standby'],
        src: [tv_on, tv_off, tv_standby],
        standbyPower: 0.3
    },
    'Washing Machine': {
        name: 'Washing Machine',
        status: ['on', 'off' , 'standby'],
        src: [washingMachine_on, washingMachine_off],
        standbyPower: 4.2
    },
    'Air Conditioner': {
        name: 'Air Conditioner',
        status: ['on', 'off', 'standby'],
        src: [airConditioner_on, airConditioner_off],
        standbyPower: 1.8
    }
}

export default appliances;