import { Box, Typography } from "@mui/material";
import Image from 'next/image'
import Doctor from "../../../assets/images/Doctor.png";
export default function Form() {
    return(
        <Box display="flex" flexDirection="column" alignItems="center">
            <Image src={Doctor} alt="Doctor" />
            <Typography variant="h4">Sobre nós</Typography>
            <Typography variant="body1">
                A plataforma foi desenvolvida com o objetivo de auxiliar o profissional de saúde a identificar possíveis casos de doenças mentais, através de um questionário de sintomas.
                </Typography>
        </Box>
    )
}