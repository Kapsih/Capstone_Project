import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    avatar:{
        type:String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAACUCAMAAAD26AbpAAAAMFBMVEXk5ueutLemrbDn6eqrsbXh4+Tq7O3W2drQ09W5vsG1ur3b3t+xt7rT1tjHy82/w8Z02zYiAAAEz0lEQVR4nO2c14LjKgyGDaKYYnj/t11wsrMpnsSAbCnn5LvKZG74o0KTmKYvX758+fLly/8FMAYmHWwh6PIH9XhaKSO2yXkRo1jxLlkokj4G0LOXStyjpJ8n+AgVMFmnpNhCqmw1exGgF/dkgFtTuIW3CJiW/ELAKkK5ZeIrAkIWrwWsIkQOXPOTmePb8V+IM08NJm8H8RYyc9Sg/XsfuvEmp6kH/ETwDQKqBh+YBXVosgFHDe0KVg3Uw75Bx3YFNbvyMYPZm0yf7MAlL0HuscGqIfOwA8y9CgozBw0QOt1oNUNkkZa63WjVkKmHX91oQEDVYKkVTNqNGKEQqRVM8/613TZyJlagBwUUFG1Aw7ARihkSqQYYN0KBUgLYcSMUT1oINRiHoEAIR7hU0oMJ9UqkW3WbhCNB0AU04PgR5YJVDyzw7iSQ7d9gQZIgIlVOMglJgVBUwWCGltn3EmgUTNPoIvWfhEx0MBaQElI926PZvIFtPMB7AdH+EyxWQipYGgmDW85bFJUErGiui1UKBbgSaHafXwn/OQlUsYCmgCwjoS1UBdm8gDi1RRoJiGskQXXvNnyc+gPZFW7/7c6TBKr9AuaWh2jXBrtrLt5Cdl81ckV1hyM7CwOkPY9yVAoQT/PIDlUhIJ2pEk1sld5r/wc85eE8iicpOj8qAIon0V5UIZhBERe5IQS0pC5xGzYD2eLih+EZWlEboZhh7NKT/PK/FmkP7RpYFHvCMmQFyjvnH4YSK9ndyB0wdVR4XnFMiuhB90a0YlHWVuktxZCcam2XHleShGvsDXoOJ1kUeN7QqkGxU1B8qa1uO9KcZb8Egm/oImFVNf8D6N2dMJJBge02ZtnRUFXDwHKpmH+mGOKtCBUzkyl5GzD2tYgiwHJvVwVYklfbKpTyyX5CpypMYclio9NW5Dmw9qEbyjC1TU5KqVbqh/L76+lTBFypjeZhmVNK8xIm7v6/CdzzSQZYxzvpoENYG/9XyufyzfV/nAEwoC/Ok53zPtYktGan6L3LufjUbEtEM/WqOnqbcnZl4Jcgfkyoly+jczkxDA5jyvB9XAf/ZnKuYkSMviRYPg9LgAmp5wBAicxhnisjCOl5GtuLlG7WlGdhUGI3xe7xX0whVV6o5uyyjpjzDtffoaLM3AQiAGz+bTXXoSLmWZ8b3GAW19Xi/LsI4dOJligpqP8I8hXprARV9/mHKCgzxhmnxCWI3z2ZMoKMh797AyWLHiegovKxx5SwoBWC/a4hpuMMAdOeV2sQ8MtBCdYgFY3s4KCSBhi82mzTcEDJJGi0Qrx9GtCPjcEeH8cPGpBvEmE+OJVuisA8uDTpnEz0qAHvPhStBI9MA0bNUa8GjzPL0SlYSzQQNCA2WvRpGBUwWCSCoGH0TgsCsYLx0j0gyaYPGobeCTR4jagjDOwgCNPpLSW1divAbKUdoX9LjderM0yvKyF2Dw7SOzsgPH2ERl8PKJNYviK7jHDiPvM9PROc4RPLK+1m6K96PIj2Qw28tjs0WpMSp3R0pbFJALMdG4vW5jdmwVxpbB1rfez4FJo8iaMfNT7fw2tm/otv8aTAMBTanggElqHQtG3AfKQDkZZgwHif8whaOrtZRnPTQ40nX4fspqFvJtT6TI4wbBhA4Q+VFURK0m/lJAAAAABJRU5ErkJggg=="
    },
},
{timestamps: true});

const User = mongoose.model('User',userSchema);

export default User;