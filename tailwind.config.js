// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        jittery: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-3px)' },
          '50%': { transform: 'translateY(2px)' },
          '75%': { transform: 'translateY(-1px)' },
        },
        floaty: {
          '0%, 100%': { 
            transform: 'translateY(0) translateX(0) rotate(0deg)',
          },
          '25%': { 
            transform: 'translateY(-20px) translateX(10px) rotate(5deg)',
          },
          '50%': { 
            transform: 'translateY(10px) translateX(-15px) rotate(-5deg)',
          },
          '75%': { 
            transform: 'translateY(-10px) translateX(15px) rotate(3deg)',
          },
        }
      },
      animation: {
        jittery: 'jittery 1.5s infinite ease-in-out',
        floaty: 'floaty infinite ease-in-out',
      }
    }
  }
}
