import {gray} from '@radix-ui/colors'
import iconSvg from '../assets/icon.svg?url'

export default async function OG() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        color: '#000',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '56px',
        }}
      >
        <img
          src={iconSvg}
          alt="logo"
          style={{
            fontSize: '64px',
            width: '1em',
            height: '1em',
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0 0 128px 0',
        }}
      >
        <div
          style={{
            padding: '0 56px 84px 56px',
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: '84px',
          }}
        >
          Hello World
        </div>
        <div
          style={{
            width: '100%',
            height: '2px',
            background: gray.gray6,
          }}
        />
      </div>
    </div>
  )
}
