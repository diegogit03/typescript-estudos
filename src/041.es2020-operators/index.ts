type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
}

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
  // data: new Date()
}

console.log(documento.data?.toString() ?? 'Ixi não existe!');
