const formatSalary = (salary_begin, salary_end, salaryType, salaryMonth) => {
  if (salaryType === 1) {
    return "面议"
  }
  if (salary_begin == 0 && salary_end > 0) {
    return `${salary_end}K以内`;
  } else if (salary_begin > 0 && salary_end > salary_begin) {
    if(salaryMonth>12){
      return `${salary_begin}-${salary_end}K*${salaryMonth}薪`;
    }
    return `${salary_begin}-${salary_end}K`
  } else if (salary_begin > 0 && salary_end === salary_begin) {
    return `${salary_begin}K`;
  } else if (salary_begin > 0) {
    return `${salary_begin}K以上`;
  } else {
    return false;
  }
};

module.exports = formatSalary;