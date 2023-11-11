import {
  Button,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Box,
} from "@mui/material";

export const diseases = [
  [
    "Febre",
    "Sangramento nasal",
    "Sangramento bucal",
    "Sangue nas fezes",
    "Sangramento na gengiva",
  ],
  [
    "Dores musculares",
    "Dores nas juntas",
    "Dores de cabeça",
    "Dores no estômago",
    "Dores nos olhos",
    "Dores no pescoço",
    "Dor abdominal",
    "Dor nas costas",
  ],
  [
    "Vômito",
    "Manchas vermelhas",
    "Diarreia",
    "Inchaço",
    "Náuseas",
    "Calafrios",
    "Problemas Digestivos",
    "Fadiga",
    "Lesões na pele",
    "Fraqueza",
    "Perda de peso",
  ],
  [
    "Inflamação",
    "Vermelhidão nos olhos",
    "Falta de apetite",
    "Incontinência urinária",
    "Desaceleração nos batimentos cardíacos",
    "Sensibilidade à luz",
    "Olhos amarelos",
    "Deformação facial",
  ],
];

export function FirstStep({ onClick }) {
  return (
    <>
      <Typography variant="h1" fontWeight="Bold" fontSize={32} color="black">
        Login
      </Typography>
      <Typography
        variant="body1"
        fontWeight="Bold"
        fontSize={18}
        color="black"
        sx={{ marginTop: -3 }}
      >
        Digite o codigo disponibilizado para realizar o login
      </Typography>
      <TextField
        id="outlined-basic"
        label="Codigo"
        variant="outlined"
        fullWidth
      />

      <Button variant="contained" onClick={onClick}>
        Confirmar
      </Button>
    </>
  );
}

export function SecondStep({ step, submit }) {
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h1" fontWeight="Bold" fontSize={32} color="black">
        Teste
      </Typography>
      <FormGroup sx={{ marginTop: 5 }}>
        {diseases[step].map((disease, index) => (
          <FormControlLabel control={<Checkbox />} label={disease} />
        ))}
      </FormGroup>
      {step === 3 && (
        <Button variant="contained" sx={{ marginTop: 5 }} onClick={submit}>
          Enviar
        </Button>
      )}
    </Box>
  );
}

export function ThirdStep({ onClick }) {
  return (
    <>
      <Typography variant="h1" fontWeight="Bold" fontSize={32} color="black">
        Resultado
      </Typography>
      <Typography
        variant="body1"
        fontSize={18}
        color="black"
        sx={{ marginTop: -3 }}
      >
        Seus sintomas correspondem a ******!
      </Typography>
     
      <Typography
        variant="body1"
        fontSize={18}
        color="black"
        sx={{ marginTop: -3 }}
      >
        Recomendamos que você consulte um profissional da saúde para mais informações.
      </Typography>

      <Button variant="contained" onClick={onClick}>
        Novo teste
      </Button>
    </>
  );
}
